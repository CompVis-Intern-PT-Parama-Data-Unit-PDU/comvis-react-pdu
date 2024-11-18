import { Link } from 'react-router-dom'
import { OctagonXIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Error() {
    return (
        <div className="h-screen flex flex-col items-center my-auto">
            <div className="flex-col justify-center text-center items-center mt-auto mb-4">
                <OctagonXIcon className="size-36 xl:w-[132px] mx-auto text-destructive"/>
                <h1 className="text-red-800 lg:text-[44px] font-bold">404 ERROR</h1>
                <p className="text-black lg:text-4xl">Sorry, page not found.</p>
            </div>
            <Button variant="link" className="bg-destructive w-fit self-center mb-auto text-destructive-foreground">
                <Link className="" to="/dashboard" >Back to Home</Link>
            </Button>
        </div>
    )
}