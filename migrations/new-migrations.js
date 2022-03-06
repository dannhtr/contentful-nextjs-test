module.exports = function (migration) {
  const blogPost = migration.editContentType("blogPost");
  blogPost.createField("category").name("Category").type("Symbol");
};
