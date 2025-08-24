class calculadora:
    def __init__(self, accion, precio_compra, precio_venta, monto):
        self.accion = accion
        self.precio_compra = precio_compra
        self.precio_venta = precio_venta    
        self.monto = monto
       
    def calcular(self):
        if self.accion == "Vender":
            venta = self.precio_compra * self.monto
            mensaje = f"Recibirás: {venta:,.0f} COP"
           
        elif self.accion == "Comprar":
            venta = self.precio_venta * self.monto
            mensaje = f"Precio de compra: {venta:,.2f} COP"
        return mensaje
    

  
       