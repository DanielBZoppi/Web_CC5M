export class Message {
    messageId: string;
    content: string;
    userId: string;
    username: string;

    constructor(username: string, content: string, messageId?: string, userId?: string) {
        this.content = content;
        this.username = username;
        this.messageId = messageId;
        this.userId = userId;
    }
}