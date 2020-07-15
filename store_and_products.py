class Store:
    def __init__(self, name):
        self.name = name
        self.products = []

    def add_product(self, new_product):
        self.products.append(new_product)
        return self

    def sell_product(self, id):
        sold_product = [p for p in self.products if p.id == id]
        self.products = [p for p in self.products if p.id != id]
        print(">>> SELLING...")
        sold_product[0].print_info()
        return sold_product

    def inflation(self, percent_increase):
        # increase price of each product
        self.products = [p.update_price(percent_increase, True) for p in self.products]
        return self

    def set_clearance(self, category, percent_discount):
        # update all products in given category with clearance price
        [p.update_price(percent_discount, False)
         for p in self.products if p.category == category]
        return self

    def print_products(self):
        print(f"\n\n**********\n{self.name} currently has:\n")
        for p in self.products:
            p.print_info()
        return self


class Product:
    next_id = 1

    def __init__(self, name, price, category):
        self.id = Product.next_id
        Product.next_id += 1
        self.name = name
        self.price = price
        self.category = category

    def update_price(self, percent_change, is_increased):
        if is_increased:
            self.price += self.price*percent_change
        else:
            self.price -= self.price*percent_change
        return self

    def print_info(self):
        print(
            f"Product name: {self.name} \nID: {self.id}\nCategory: {self.category} \nPrice: {self.price}\n")
        return self


store1 = Store("store1")

iPhone = Product("iPhone", 950, "electronics")
iPhone.print_info()
iPhone.update_price(.25, True)
iPhone.print_info()

sGalaxy = Product("Galaxy", 600, "electronics")

chair = Product("Desk chair", 100, "furniture")

store1.add_product(iPhone)
store1.add_product(sGalaxy)
store1.add_product(chair)

store1.print_products()

store1.inflation(.1)
store1.print_products()

store1.set_clearance("electronics", .1)
store1.print_products()

store1.sell_product(1)
store1.print_products()
