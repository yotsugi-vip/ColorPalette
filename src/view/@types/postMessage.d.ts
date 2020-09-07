interface IPOST_MESSAGE {
    command: string
}

interface IPOST_MESSAGE_COLORS extends IPOST_MESSAGE {
    payload: Array<string>
}
