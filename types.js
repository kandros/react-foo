export type FilePathDescriptor = {
    "blueprint-path": string,
    "target-path": string
}

export type Blueprint = {
    name: string,
    desctiption: string,
    usage: string,
    files: FilePathDescriptor[],
}

export type Config = {
    blueprints: Blueprint[]
}
