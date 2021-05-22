export interface Kid {
    id: number,
    code: string,
    name: string,
    detail: {
        id: number,
        action: string,
        imageUrl: string,
        phone: string,
    }
}