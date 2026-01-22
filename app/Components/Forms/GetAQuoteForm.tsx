import React from 'react';
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from '../ui/field';
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel
} from '../ui/select';
import { Textarea } from "../ui/textarea";
import {
  RadioGroup,
  RadioGroupItem,
} from "../ui/radio-group"

import { Label } from '../ui/label';
function GetAQuoteForm() {
  return (
    <div className="w-full h-full relative z-10 bg-white/10 backdrop-blur-xl backdrop-saturate-150 text-white shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] rounded-2xl p-4 sm:p-6 md:p-8 overflow-y-auto max-h-[80vh] sm:overflow-visible sm:max-h-none">
      <form className="space-y-2 max-w-6xl mx-auto">
        <FieldGroup>
          <FieldSet >
           <div className="w-full flex items-center justify-center py-3 sm:py-4">
            
            
             <FieldLegend className="text-center font-extrabold tracking-tight leading-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-red-400 drop-shadow">
                 How much our services cost?      Get A Quote in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-300">24 hours</span>
               </span>
             </FieldLegend>
           </div>
        
            <FieldGroup>
              <div className="w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 px-1 sm:px-2">
              <Field>
                <FieldLabel htmlFor="firstName">First Name </FieldLabel>
                <Input id="firstName" placeholder="First Name" required className="w-full" />
              </Field>
              <Field>
                <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                <Input
                  id="lastName"
                  placeholder="Last Name"
                  required
                  className="w-full"
                />
              
              </Field>
              <Field>
                <FieldLabel htmlFor="BussinessName">Bussiness Name</FieldLabel>
                <Input
                  id="bussinessName"
                  placeholder="Bussiness Name"
                  required
                  className="w-full"
                />
              
              </Field>
              </div>

               <div className="w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 px-1 sm:px-2">
              <Field>
                <FieldLabel htmlFor="Phone">Phone </FieldLabel>
                <Input id="Phone" placeholder="Phone" required className="w-full" />
              </Field>
              <Field>
                <FieldLabel htmlFor="Email">Email</FieldLabel>
                <Input
                  id="Email"
                  placeholder="Email"
                  required
                  className="w-full"
                />
              
              </Field>
              <Field>
                <FieldLabel htmlFor="Us">How did you hear about us?</FieldLabel>
                <Input
                  id="Us"
                  placeholder="Google, Facebook, Linkedin etc"
                  required
                  className="w-full"
                />
              
              </Field>
              </div>
              
            </FieldGroup>
          </FieldSet>

          <div className="w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 px-1 gap-4">
            <div className='flex flex-col gap-2'>
              <FieldLabel className='mb-1'>What are you looking for?</FieldLabel>
               <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center gap-3">
                     <RadioGroupItem value="Dedicated IT Staff hiring" id="r1" />
                         <Label htmlFor="r1">Dedicated IT Staff hiring</Label>
                   </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="Create a mobile or web app" id="r2" />
                    <Label htmlFor="r2">Create a mobile or web app</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="Fix my current application" id="r3" />
                    <Label htmlFor="r3">Fix my current application</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="Improve my application" id="r4" />
                    <Label htmlFor="r4">Improve my application</Label>
                  </div>

                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="Something else" id="r5" />
                    <Label htmlFor="r5">Something else</Label>
                  </div>
               </RadioGroup>

               </div>

                <div className='flex flex-col gap-2'>
              <FieldLabel className='mb-1'>Project Type</FieldLabel>
               <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center gap-3">
                     <RadioGroupItem value="Dedicated IT Staff hiring" id="b1" />
                         <Label htmlFor="b1">Dedicated IT Staff hiring</Label>
                   </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="Mobile App Development" id="b2" />
                    <Label htmlFor="b2">Mobile App Development</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="Business Dashboard" id="b3" />
                    <Label htmlFor="b3">Business Dashboard</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="Product Designing & Strategy" id="b4" />
                    <Label htmlFor="b4">Product Designing & Strategy</Label>
                  </div>

                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="Startup MVP & Prototyping" id="b5" />
                    <Label htmlFor="b5">Startup MVP & Prototyping</Label>
                  </div>

                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="Startup MVP & Prototyping" id="b6" />
                    <Label htmlFor="b6">Startup MVP & Prototyping</Label>
                  </div>
               </RadioGroup>

               </div>

                <div className='flex flex-col gap-2'>
              <FieldLabel className='mb-1'>What&apos;s your budget?</FieldLabel>
               <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center gap-3">
                     <RadioGroupItem value="Not specified" id="c1" />
                         <Label htmlFor="c1">Not specified</Label>
                   </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="less than $15,000" id="c2" />
                    <Label htmlFor="c2">less than $15,000</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="$15,000 - $50,000" id="c3" />
                    <Label htmlFor="c3">$15,000 - $50,000</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="$50,000 - $100,000" id="c4" />
                    <Label htmlFor="c4">$50,000 - $100,000</Label>
                  </div>

                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="$100,000 - $500,000" id="c5" />
                    <Label htmlFor="c5">$100,000 - $500,000</Label>
                  </div>

                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="$500,000 or more" id="c6" />
                    <Label htmlFor="c6">$500,000 or more</Label>
                  </div>
               </RadioGroup>

               </div>


              <div className="grid w-full gap-3 sm:col-span-3 lg:col-span-3">
                <Textarea placeholder="Tell us about your project, goals, and timeline." className="w-full min-h-20 md:min-h-30 resize-y" />
                <div className='w-full flex justify-end'>
                   <Button className="w-full md:w-fit">Send message</Button>  
             </div>
             </div>
             

          </div>

         

          

        
        </FieldGroup>
      </form>
    </div>
  );
}

export default GetAQuoteForm;
