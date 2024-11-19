import { Link } from 'react-router-dom'
import { Icons } from "@/assets/icons/icons";
import { Button } from '@/components/ui/button'

export default function UnderConst() {
    return (
        <div className="h-full flex flex-col items-center my-auto max-h-[93%]">
            <div className="flex-col justify-center text-center items-center mt-auto mb-4">
                <Icons.construction className="size-36 xl:w-[132px] mx-auto"/>
                <h1 className="lg:text-[44px] font-bold">Under Construction!</h1>
                <p className="lg:text-4xl">Sorry, service is not available yet</p>
            </div>
            <Button variant="link" className="bg-[#facc15]  w-fit self-center mb-auto text-destructive-foreground">
                <Link className="" to="/dashboard" >Back to Home</Link>
            </Button>
        </div>
    )
}