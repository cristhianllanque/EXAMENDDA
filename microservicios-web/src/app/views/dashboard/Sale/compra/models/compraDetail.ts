import {Proveedor} from "../../../Setup/proveedor/models/proveedor";

export class CompraDetail {
  id?: number;
  cantidad?: string;
  precio_u?: string;
  precio_t?: string;
  proveedor?: Proveedor;


  constructor(cantidad: string, precio_u: string,precio_t: string) {
    this.cantidad = cantidad;
    this.precio_u = precio_u;
    this.precio_t = precio_t;


  }
}
