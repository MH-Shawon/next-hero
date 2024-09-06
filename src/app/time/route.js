export const cache = 'force-cache'
export async function GET() {
    return Response.json({
        currentTime: new Date().toLocaleTimeString()
    })
}