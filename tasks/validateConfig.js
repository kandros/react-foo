const validateConfig = config => {
    let valid = true;
    const requiredKeys = ['blueprints'];
    const requiredBlueprintKeys = ['name', 'description', 'usage', 'files'];
    const requiredFileKeys = ['blueprint-path', 'target-path'];

    if (!requiredKeys.every(c => c in config)) {
        return false;
    }

    config.blueprints.forEach(b => {
        if (!requiredBlueprintKeys.every(c => c in b)) {
            valid = false;
        } else {
            if (b.files) {
                b.files.forEach(file => {
                    if (!requiredFileKeys.every(c => c in file)) {
                        valid = false;
                    }
                });
            }
        }
    });

    return valid;
}

module.exports = validateConfig