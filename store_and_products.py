class Store:
    def __init__(self, name):
        self.name = name
        self.products = []

    def add_product(self, new_product):
        self.products.append(new_product)
        return self

    def sell_product(self, id):
        sold_product = self.products.pop(id)
        sold_product.print_info()
        return sold_product

    def inflation(self, percent_increase):
        # increase price of each product
        self.products = [p.update_price(percent_increase) for p in self.products]
        return self

    def set_clearance(self, category, percent_discount):
        #update all products in given category with clearance price
        self.products = [p.update_price(percent_discount) for p in self.products if p.category == category]
        return self

class Product:
    def __init__(self, name, price, category):
        self.name = name
        self.price = price
        self.category = category
    
    def update_price(self, percent_change, is_increased):
        # if is_increased:
        #     self.price += self.price*percent_change
        # else:
        #     self.price -= self.price*percent_change
        # attempt at using ternary operator:
        self.price += self.price*percent_change if is_increased else self.price -= self.price*percent_change
        return self

    def print_info(self):
        print(f"Product name: {self.name} \nCategory: {self.category} \nPrice: {self.price}")
        return self