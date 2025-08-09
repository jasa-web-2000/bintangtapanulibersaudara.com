"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Input,
  Textarea,
} from "@/components/ui/";
import { appConfig, whatsapp } from "@/lib";

const FormSchema = z.object({
  name: z.string().nonempty({ message: "Wajib isi nama" }),
  ticket: z.number().min(1, "Jumlah tiket min 1"),
  origin: z.string().nonempty({ message: "Wajib isi titik jemput" }),
  destination: z.string().nonempty({ message: "Wajib isi titik antar" }),
});
export function Booking() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      ticket: 1,
      origin: "",
      destination: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const message = `Halo admin ${appConfig.APP_NAME}, saya ingin memesan travel!

*Nama* : ${data.name}
*Asal* : ${data.origin}
*Tujuan* : ${data.destination}
*Jumlah* : ${data.ticket} tiket

${window.location.href}`;

    const url = whatsapp(appConfig.TELPHONE, message);

    window.open(url, "_blank");
  }
  return (
    <div className="bg-white rounded-lg shadow-md p-5 border-b-8 border-indigo-500">
      <h3>Reservasi Tiket</h3>
      <div className="border-t h-1 w-full mt-3"></div>
      <Form {...form}>
        <form
          id="cari-rute"
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-white grid grid-cols-1 sm:grid-cols-2 gap-x-5 [&_label]:mt-4 [&_label]:line-clamp-1 [&_button]:w-full [&_button]:overflow-hidden [&_textarea]:h-9 ">
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="sm:col-span-1">
                <FormLabel>Nama Pemesan</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Input nama"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Ticket */}
          <FormField
            control={form.control}
            name="ticket"
            render={({ field }) => (
              <FormItem className="sm:col-span-1">
                <FormLabel>Jumlah Tiket</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(Number(value))}
                  defaultValue={String(field.value)}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih jumlah tiket " />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Array.from({ length: 14 }, (_, i) => i + 1).map((num) => (
                      <SelectItem
                        key={num}
                        value={String(num)}>
                        {String(num)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Jemput */}
          <FormField
            control={form.control}
            name="origin"
            render={({ field }) => (
              <FormItem className="sm:col-span-full">
                <FormLabel>Titik Penjemputan</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tuliskan detail titik penjemputan"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Antar */}
          <FormField
            control={form.control}
            name="destination"
            render={({ field }) => (
              <FormItem className="sm:col-span-full">
                <FormLabel>Titik Pengantaran</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tuliskan detail titik pengantaran"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="w-full col-span-full text-right mt-5">
            <Button
              type="submit"
              title="kirim reservasi"
              // disabled={!form.formState.isValid}
              className="!w-auto">
              Kirim
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
