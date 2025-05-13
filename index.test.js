const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require('./db/connection.js');

describe('Social Sequelzie Test', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the test suite is run
        await db.sync({ force: true });
    });

    // Write your tests here
    
    test("replace with your test", function() {
        expect(true).toBe(true);
    });

    test('can create a User', async () => {
        const testUser = await User.create({ username: 'George', email: '123' });
        expect(testUser.username).toBe('George');
        expect(testUser.email).toBe('123');
    });

    test('can create a Profile', async () => {
        const testProfile = await Profile.create({ bio: "hi", profilePicture: "pic", birthday: "12345", UserId: 1});
        expect(testProfile.bio).toBe("hi");
        const testUser = await User.findByPk(1);
        expect(await testProfile.getUser()).toEqual(testUser);

    });

    test('can create a post', async () => {
        const testPost = await Post.create({
            title: "Hi yall",
            body: "Hello worlds!",
            createdAt: "123456",
            UserId: 1
        });
        const testPost2 = await Post.create({
            title: "Hi yall",
            body: "Hello worlds!",
            createdAt: "123456",
            UserId: 1
        });
        const testUser = await User.findByPk(1);
        expect(testPost.title).toBe("Hi yall");
        console.log(await testUser.getPosts());
        console.log([testPost, testPost2]);
        expect(await testPost.getUser()).toEqual(testUser);
        expect(await testPost2.getUser()).toEqual(testUser);
    });

    test('can create a comment', async () => {
        const testComment = await Comment.create({
            body: "Hello to the world as well!",
            createdAt: "123456",
            PostId: 1
        });

        const testComment2 = await Comment.create({
            body: "Hello to the world as well!",
            createdAt: "123456",
            PostId: 1
        });

        testPost = await Post.findByPk(1);

        expect(testComment.body).toBe("Hello to the world as well!");
        expect(await testComment.getPost()).toEqual(testPost);
        expect(await testComment2.getPost()).toEqual(testPost);
    });

    test("can create like", async () => {

    })






})