module.exports = {
    config: 'yarrrrr',
    blueprints: [
        {
            "name": "component",
            "description": "Generates a dumb react component in shared components",
            "usage": "dumb-s [component-name]",
            "files": [
                {
                    "blueprint-path": "blueprints/component/container.ejs",
                    "target-path": "components/<%= helpers.capitalize(name) %>/<%= helpers.capitalize(name) %>Container.js"
                },
                {
                    "blueprint-path": "blueprints/component/presentational.ejs",
                    "target-path": "components/<%= helpers.capitalize(name) %>/<%= helpers.capitalize(name) %>Dumb.js"
                }
            ]
        }
    ]
}
