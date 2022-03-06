module.exports = function (migration) {
  const driver = migration.editContentType("driver");

  driver
    .createField("winnerIn")
    .name("Winner in")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Link",
      validations: [
        {
          linkContentType: ["circuits"],
        },
      ],
      linkType: "Entry",
    });

  const circuits = migration
    .createContentType("circuits")
    .name("Circuits")
    .description("")
    .displayField("name");

  circuits
    .createField("name")
    .name("Name")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  circuits.changeFieldControl("name", "builtin", "singleLine", {});
};
