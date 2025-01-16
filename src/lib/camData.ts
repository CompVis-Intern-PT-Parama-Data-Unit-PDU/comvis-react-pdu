type Camera = {
    id: string,
    name: string,
    ip: string,
    company: string,
    site: string,
    well: string
  }

export const camData: Camera[] = [
    {
        id: "1",
        name: "Camera 1",
        ip: "rtmp://192.168.1.1/live/test",
        company: "Company 1",
        site: "Site 1",
        well: "Well 1",
    },
    {
        id: "2",
        name: "Camera 2",
        ip: "rtmp://192.168.1.2/live/test",
        company: "Company 2",
        site: "Site 2",
        well: "Well 2",
    },
    {
        id: "3",
        name: "Camera 3",
        ip: "rtmp://192.168.1.3/live/test",
        company: "Company 3",
        site: "Site 3",
        well: "Well 3",
    },
]