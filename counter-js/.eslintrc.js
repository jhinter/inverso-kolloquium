module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["airbnb-base", "prettier"],
    plugins: ["prettier", "eslint-plugin-inverso"],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: "module",
    },
    rules: {
        "prettier/prettier": "error",
        "inverso/no-waitfor-without-await": "error",
    },
};
