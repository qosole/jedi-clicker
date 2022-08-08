const router = require('express').Router();
const { Item, Store, User, UserItem } = require('../../models');

// The '/api/users' endpoint

// GET all users
router.get('/', async (req, res) => {
    try {
        const allUsers = await User.findAll({
            include: [{ model: Item }]
        });
        if (!allUsers) {
            res.status(404).json({ message: 'No user data in db' });
            return;
        }

        res.status(200).json(allUsers);

    } catch (err) { res.status(500).json(err); }
});

// GET user by id
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {
            include: [{ model: Item }]
        });
        if (!user) {
            res.status(404).json({ message: 'No user found with that id' });
            return;
        }

        res.status(200).json(user);

    } catch (err) { res.status(500).json(err); }
});

// Create a new user
router.post('/', async (req, res) => {
    try {
        // req.body should have username and password
        const newUser = await User.create(req.body);
        if (!newUser) {
            res.status(400).json({ message: 'Syntax error with creating new user' });
            return;
        }

        res.redirect('/');

    } catch (err) { res.status(500).json(err); }
});

// Login
router.post('/login', async (req, res) => {
    try {
        // req.body should have username and password
        const userData = await User.findOne({ where: { username: req.body.username } });
  
        if (!userData) {
            res.status(400).json({ message: 'Incorrect username or password' });
            return;
        }
  
        // Verify the posted password with the password store in the database
        const validPassword = userData.checkPassword(req.body.password);
    
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect username or password' });
            return;
        }
    
        // Create session variables based on the logged in user
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            
            res.redirect('/');
        });
    
    } catch (err) { res.status(400).json(err); }
});
  
// Logout
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
        res.status(204).end();
    });
    } else {
        res.status(404).end();
    }
});

// Update a user's galactic_credit by session id
router.put('/', async (req, res) => {
    try {
        // req.body should have galactic_credits
        const user = await User.findByPk(req.session.user_id);
        if (!user) {
            res.status(404).json({ message: 'No user found with that id' });
            return;
        }

        user.galactic_credits = req.body.galactic_credits;
        await user.save();

        res.status(200).end();

    } catch (err) { res.status(500).json(err); }
});

// Update a user's items by session id
router.put('/items/', async (req, res) => {
    try {
        // req.body should have item_id
        const newUserItemData = {
            user_id: req.session.user_id,
            item_id: req.body.item_id
        };

        const userItem = await UserItem.create(newUserItemData);
        if (!userItem) {
            res.status(400).json({ message: 'Syntax error in updating items' });
            return;
        }

        res.status(200).end();

    } catch (err) { res.status(500).json(err); }
})

// Delete a user by id
router.delete('/:id', async (req, res) => {
    try {
        const userData = await User.destroy({
            where: { id: req.params.id }
        });
        if (!userData) {
            res.status(404).json({ message: 'No user found with that id' });
            return;
        }

        res.status(200).json(userData);

        } catch (err) { res.status(500).json(err); }
});

module.exports = router;