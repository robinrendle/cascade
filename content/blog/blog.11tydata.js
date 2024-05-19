module.exports = {
	tags: ["posts"],
	layout: "layouts/post.njk",
	permalink: function ({ title }) {
		return `/${this.slugify(title)}/`;
	},
};
