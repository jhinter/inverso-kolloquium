module.exports = {
  rules: {
    /* Avoids accepting tests which use  waitFor (jest) without waiting for it to resolve.
     * Examples:
     * 😒 waitFor(() => {}))
     * 🤩 await waitFor(() => {})
     */
    "no-waitfor-without-await": {
      create: function (context) {
        return {
          ":not(AwaitExpression) > CallExpression[callee.name='waitFor']": (
            node
          ) => {
            context.report({
              node,
              message: "😒 Do not call waitFor without preceding await.",
            });
          },
        };
      },
    },
  },
};
