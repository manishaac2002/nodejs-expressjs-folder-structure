import application from "../nodejs-expressjs-folder structure/users/app.js";

const PORT = process.env.PORT || 5000

application.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`);
})