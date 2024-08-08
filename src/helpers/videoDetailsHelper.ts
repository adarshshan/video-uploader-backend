export function generateSimpleUniqueCode(name: string) {
    return name + Math.random().toString(36).substring(2, 2 + 8);
}