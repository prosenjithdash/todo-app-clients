import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Container from "@/componentss/Container";
import TodoModal from "@/componentss/todo/TodoModal";
import {  SearchIcon } from "lucide-react";
import {  useState } from "react";

const Todos = () => {

    // useState for show all todos
    const [todos, setTodos] = useState(
        [
            {
                "todo": "My new todo 01.",
                "priority": "medium",
                "isComplete": true,
                "userName": "Pappu",
                "age": "25"
            },
            {
                "todo": "My new todo 02.",
                "priority": "low",
                "isComplete": true,
                "userName": "Bappu",
                "age": "22"
            },
            {
                "todo": "My new todo 03.",
                "priority": "high",
                "isComplete": false,
                "userName": "shikat",
                "age": "19"
            }
        ]
    );

    
    return (
        <Container>
            <div className="flex justify-between mt-32">
                <div className="flex items-center gap-4">
                    <SearchIcon />
                    <Input placeholder='Search'/>
                </div>
                <div>
                    <TodoModal/>
                </div>
            </div>
            <div className="border-b border-gray-300 my-5" />
            
            <div className="space-y-3">
                {
                    todos.map((todo, idx) =>
                        <div className="border px-3 py-2 rounded-lg border-gray-300  flex gap-3 items-center" key={idx}>
                            <Checkbox/>
                            <p className="font-semibold">{todo.todo}</p>
                            <div className="bg-red-600 size-4 rounded-full ml-auto"/>
                         
                          
                    </div> )
                }
            </div>
        </Container>
    );
};

export default Todos;