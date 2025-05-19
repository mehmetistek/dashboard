"use client";

import { deleteProduct } from "@/utils/api";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const DeleteButton = ({id}: {id:number}) => {
    const router = useRouter();
  const  handleDelete = () => {
   deleteProduct(id)
   // silme işlemi başarılı olunca
   .then(() => {
    //sayfayı yenile (ürünler tekrar alınsın)
    router.refresh();

    //bildirim gönder
    toast.success("Ürün kaldırıldı!");
   });
  };

  return (
    <button onClick={handleDelete} className="py-1 px-3 bg-[#f45757]  transition rounded-md">Sil</button>
  )
}

export default DeleteButton;