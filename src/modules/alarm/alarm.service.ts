export class AlarmService {
    async send(name: string, message: string): Promise<void> {
        // Sending implements
        console.log(message + ' pet name: ' + name);
    }
}
