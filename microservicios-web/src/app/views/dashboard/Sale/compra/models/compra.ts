
import {CompraDetail} from "./compraDetail";
import {Proveedor} from "../../../Setup/proveedor/models/proveedor";

export class Compra {
  marca?: string;
  id?: number;
  categoria?: string;
  descripcion?: string;
  precio_Total?: number;
  estado?: string;
  serie?: number;
  factura?: string;
  fecha?: string;
  proveedor?: Proveedor;
  compraDetalles?: CompraDetail[];

}

