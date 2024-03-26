import React from 'react'
import Joi from 'joi'
import {joiResolver} from '@hookform/resolvers/joi'
import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { IProduct } from '@/interfaces/product'
import { useMutation } from '@tanstack/react-query'
import { addProduct } from '@/services/product'
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"


type Inputs = {
    _id?: number | string
    name: string,
    category?: string,
    price: number,
    // gallery: string[],
    image: string,
    description: string,
    discount: number,
    featured: boolean,
    countInStock: number
}
const productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    category: Joi.string().required(),
    // gallery: Joi.string(),
    image: Joi.string(),
    description: Joi.string(),
    discount: Joi.number(),
    featured: Joi.boolean(),
    countInStock: Joi.number(),
})
const ProductAdd = () => {
    const {toast} = useToast();
    const form = useForm({
        resolver: joiResolver(productSchema),
        defaultValues: {
           name: "",
           price: 0,
           category: "",
        //    gallery: "",
            image: "",
            description: "",
            discount: 0,
            featured: true,
            countInStock: 0
          },
    });
    

    const mutation = useMutation({
        mutationFn: async (product: IProduct) => {
            const { data } = await addProduct(product)
            return data
        },
        onSuccess: () => {
            form.reset();
            toast({
                'title': 'Thêm sản phẩm thành công',
                'variant': 'success',
            })
        }
    })

    const onSubmit: SubmitHandler<Inputs> = (product) => {
        mutation.mutate(product)
    }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField control={form.control} name='name' render={({ field }) => (
                <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                        <Input {...field} id='name'/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )} />

            <FormField control={form.control} name='price' render={({ field }) => (
                <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                        <Input {...field} id='price'/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )} />
            
            <FormField control={form.control} name='category' render={({ field }) => (
                <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                        <Input {...field} id='category'/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )} />

            {/* <FormField control={form.control} name='gallery' render={({ field }) => (
                <FormItem>
                    <FormLabel>Gallery</FormLabel>
                    <FormControl>
                        <Input {...field} id='gallery'/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )} /> */}

            <FormField control={form.control} name='image' render={({ field }) => (
                <FormItem>
                    <FormLabel>Image</FormLabel>
                    <FormControl>
                        <Input {...field} id='image'/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )} />

            <FormField control={form.control} name='description' render={({ field }) => (
                <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                        <Input {...field} id='description'/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )} />

            <FormField control={form.control} name='discount' render={({ field }) => (
                <FormItem>
                    <FormLabel>Discount</FormLabel>
                    <FormControl>
                        <Input {...field} id='discount'/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )} />

            <FormField control={form.control} name='featured' render={({ field }) => (
                <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
                    {/* <FormLabel>Featured</FormLabel> */}
                    <FormControl>
                        <Checkbox   
                            checked={field.value}
                            onCheckedChange={field.onChange}
                        />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                        <FormLabel>
                        Use different settings for my mobile devices
                        </FormLabel>
                    </div>
                    <FormMessage />
                </FormItem>
            )} />
            <Button type="submit" variant='destructive'>Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default ProductAdd
