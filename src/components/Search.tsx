"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { capitalize } from "@/lib";
import { SearchCheck, SearchX } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/";

import provinces from "@/lib/data/provinces.json";
import regencies from "@/lib/data/regencies.json";
import districts from "@/lib/data/districts.json";

const FormSchema = z.object({
  origin_province: z
    .string()
    .nonempty({ message: "Wajib pilih provinsi asal!" }),
  origin_regency: z.string().optional(),
  origin_district: z.string().optional(),
  destination_province: z
    .string()
    .nonempty({ message: "Wajib pilih provinsi tujuan!" }),
  destination_regency: z.string().optional(),
  destination_district: z.string().optional(),
});

export function Search() {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      origin_province: "",
      origin_regency: undefined,
      origin_district: undefined,
      destination_province: "",
      destination_regency: undefined,
      destination_district: undefined,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const origin =
      data?.origin_district ?? data?.origin_regency ?? data?.origin_province;

    const destination =
      data?.destination_district ??
      data?.destination_regency ??
      data?.destination_province;

    window.open(`/travel/${origin}/${destination}/`, "_blank");
  }

  return (
    <Form {...form}>
      <form
        id="cari-rute"
        onSubmit={form.handleSubmit(onSubmit)}
        className="scroll-mt-24 border-b-8 border-b-indigo-500 bg-white rounded-lg shadow p-4 sm:px-6 grid grid-cols-2 md:grid-cols-1 gap-x-5 [&_label]:mt-4 [&_label]:line-clamp-1 [&_button]:w-full [&_button]:overflow-hidden ">
        {/* ASAL */}
        <div className="md:grid md:grid-cols-3 md:gap-x-6 md:">
          {/* Provinsi Asal */}
          <FormField
            control={form.control}
            name="origin_province"
            render={({ field }) => (
              <>
                {form.formState.errors.origin_province && (
                  <p className="text-red-600 text-sm mt-1 md:col-span-full">
                    {form.formState.errors.origin_province.message}
                  </p>
                )}
                <FormItem>
                  <FormLabel>Provinsi Asal</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih provinsi" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {provinces
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((e, i) => {
                          return (
                            <SelectItem
                              key={i}
                              value={e.id}>
                              {capitalize(e?.name) ?? "code id: " + e.id}
                            </SelectItem>
                          );
                        })}
                    </SelectContent>
                  </Select>
                </FormItem>
              </>
            )}
          />

          {/* Kota/Kab Asal */}
          <FormField
            control={form.control}
            name="origin_regency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kota/Kab Asal</FormLabel>
                <Select
                  disabled={form.watch("origin_province") == ""}
                  onValueChange={field.onChange}
                  defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih kota/kab" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-h-56">
                    {regencies
                      .filter(
                        (r) => r.province_id == form.watch("origin_province")
                      )
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((e, i) => {
                        return (
                          <SelectItem
                            key={i}
                            value={e.id}>
                            {capitalize(e?.name) ?? "code id: " + e.id}
                          </SelectItem>
                        );
                      })}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          {/* kecamatan Asal */}
          <FormField
            control={form.control}
            name="origin_district"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kecamatan Asal</FormLabel>
                <Select
                  disabled={form.watch("origin_regency") == undefined}
                  onValueChange={field.onChange}
                  defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih kecamatan" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-h-56">
                    {districts
                      .filter(
                        (r) => r.regency_id == form.watch("origin_regency")
                      )
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((e, i) => {
                        return (
                          <SelectItem
                            key={i}
                            value={e.id}>
                            {capitalize(e?.name) ?? "code id: " + e.id}
                          </SelectItem>
                        );
                      })}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </div>

        {/* TUJUAN */}
        <div className="md:grid md:grid-cols-3 md:gap-x-6 md:">
          {/* Provinsi Tujuan */}
          <FormField
            control={form.control}
            name="destination_province"
            render={({ field }) => (
              <>
                {form.formState.errors.destination_province && (
                  <p className="text-red-600 text-sm mt-1 md:col-span-full">
                    {form.formState.errors.destination_province.message}
                  </p>
                )}
                <FormItem>
                  <FormLabel>Provinsi Tujuan</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih provinsi" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {provinces
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((e, i) => {
                          return (
                            <SelectItem
                              key={i}
                              value={e.id}>
                              {capitalize(e?.name) ?? "code id: " + e.id}
                            </SelectItem>
                          );
                        })}
                    </SelectContent>
                  </Select>
                </FormItem>
              </>
            )}
          />

          {/* Kota/Kab Tujuan */}
          <FormField
            control={form.control}
            name="destination_regency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kota/Kab Tujuan</FormLabel>
                <Select
                  disabled={form.watch("destination_province") == ""}
                  onValueChange={field.onChange}
                  defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih kota/kab" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-h-56">
                    {regencies
                      .filter(
                        (r) =>
                          r.province_id == form.watch("destination_province")
                      )
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((e, i) => {
                        return (
                          <SelectItem
                            key={i}
                            value={e.id}>
                            {capitalize(e?.name) ?? "code id: " + e.id}
                          </SelectItem>
                        );
                      })}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          {/* kecamatan Tujuan */}
          <FormField
            control={form.control}
            name="destination_district"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kecamatan Tujuan</FormLabel>
                <Select
                  disabled={form.watch("destination_regency") == undefined}
                  onValueChange={field.onChange}
                  defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih kecamatan" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-h-56">
                    {districts
                      .filter(
                        (r) => r.regency_id == form.watch("destination_regency")
                      )
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((e, i) => {
                        return (
                          <SelectItem
                            key={i}
                            value={e.id}>
                            {capitalize(e?.name) ?? "code id: " + e.id}
                          </SelectItem>
                        );
                      })}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </div>

        <div className="w-full col-span-full text-right mt-5">
          <Button
            type="submit"
            disabled={!form.formState.isValid}
            title="cari travel"
            className="!w-auto">
            {form.formState.isValid ? <SearchCheck /> : <SearchX />} Cari Travel
          </Button>
        </div>
      </form>
    </Form>
  );
}
