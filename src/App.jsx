import "./App.css";
import { z } from "zod";
import { cn } from "./lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const chains = [
  { label: "Arbitrium", value: "ar" },
  { label: "Base", value: "ba" },
  { label: "Scroll", value: "sc" },
];

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-20 bg-gradient-to-r from-transparent via-secondary to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const formSchema = z.object({
  originChain: z.string({
    required_error: "Please select an Origin Chain.",
  }),
  targetChain: z.string({
    required_error: "Please select an Target Chain.",
  }),
});
function App() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      originChain: "",
      originChain: "",
    },
  });

  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <section
      id="app"
      className="max-w-screen-md mx-auto mt-8 rounded-lg px-4 py-8 flex justify-between items-center"
    >
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome to Aceternity
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Login to aceternity if you can because we don&apos;t have a login flow
          yet
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-8"
          >
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 my-4">
              <FormField
                control={form.control}
                name="originChain"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Origin Chain</Label>
                        <Select {...field}>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Chain" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Arbitrium">Arbitrium</SelectItem>
                            <SelectItem value="Base">Base</SelectItem>
                            <SelectItem value="Scroll">Scroll</SelectItem>
                          </SelectContent>
                        </Select>
                      </LabelInputContainer>
                    </FormControl>
                    <FormDescription>
                      This is the chain you are coming from.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="targetChain"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Target Chain</Label>
                        <Select {...field}>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Chain" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Arbitrium">Arbitrium</SelectItem>
                            <SelectItem value="Base">Base</SelectItem>
                            <SelectItem value="Scroll">Scroll</SelectItem>
                          </SelectContent>
                        </Select>
                      </LabelInputContainer>
                    </FormControl>
                    <FormDescription>
                      This is the chain you are coming from.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="••••••••" type="password" />
            </LabelInputContainer>

            <LabelInputContainer className="mb-8">
              <Label htmlFor="twitterpassword">Your twitter password</Label>
              <Input
                id="twitterpassword"
                placeholder="••••••••"
                type="twitterpassword"
              />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn   bg-gray-50 block w-full text-textColor shadow-input rounded-md h-10 font-medium ]"
              type="submit"
            >
              Sign up &rarr;
              <BottomGradient />
            </button>
          </form>
        </Form>
      </div>
    </section>
  );
}

export default App;
