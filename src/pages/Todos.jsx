import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Container from "@/componentss/Container";
import { SearchIcon } from "lucide-react";

const Todos = () => {
    return (
        <Container>
            <div className="flex justify-between mt-32">
                <div className="flex items-center gap-4">
                    <SearchIcon />
                    <Input placeholder='Search'/>
                </div>
                <div>
                    <Button>Add Todo</Button>
                </div>
            </div>
            <div className="border-b border-gray-300 my-5"/>
        </Container>
    );
};

export default Todos;