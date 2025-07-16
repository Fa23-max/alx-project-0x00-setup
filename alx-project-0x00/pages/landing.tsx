import Button from "@/components/Button";
import Card from "@/components/Card"
const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card />
            <Button
          sizes="text-sm"
          shapes="rounded-full"
          color="bg-blue-500"
          text="Click Me"
        />
        </div>
        
    )

}
export default Landing;