export interface IPost {
            id: number,
            title: string,
            body: string,
            tags: [
                string,
                string,
                string
            ],
            reactions: {
                likes: number,
                dislikes: number
            },
            views: number,
            userId: number
        }