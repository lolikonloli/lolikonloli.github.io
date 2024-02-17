# 闭包与工厂函数



# 闭包

　　闭包是一个函数，它记住了它被创建时的环境。更具体地说，闭包可以访问在其外部作用域定义的非全局变量，即使在其外部作用域的生命周期已经结束时仍然如此。

　　闭包的关键特性是：

* 它是一个定义在另一个函数内部的函数。
* 它可以访问其外部函数作用域中的变量，即使外部函数已经返回。

　　闭包的一个常见用途是创建一个保持某些私有数据的函数，就像对象的方法保持对对象实例变量的访问一样。

```applescript
def outer_function(msg):
    message = msg

    def inner_function():
        print(message)

    return inner_function

my_func = outer_function(&#39;Hello&#39;)
my_func()  # 输出: Hello
```

　　在这个例子中，`inner_function`​ 是一个闭包，它“记住”了变量 `message`​，即使在 `outer_function`​ 执行结束后。

# 工厂函数

　　工厂函数是一个创建并返回其他函数的函数。工厂函数通常用于创建特定类型的对象，或在运行时根据特定的参数创建不同的函数。

　　工厂函数的关键特性是：

* 它返回一个函数。
* 返回的函数通常是为特定任务或操作定制的。

　　工厂函数在需要根据不同条件生成不同行为的函数时非常有用。

```applescript
def power_factory(exponent):
    def power(base):
        return base ** exponent
    return power

square = power_factory(2)
cube = power_factory(3)

print(square(4))  # 输出: 16
print(cube(4))    # 输出: 64

```

　　在这个例子中，`power_factory`​ 是一个工厂函数，它根据指定的指数 `exponent`​ 创建并返回一个新的函数 `power`​。


---

> 作者: lolikonloli  
> URL: /%E9%97%AD%E5%8C%85%E4%B8%8E%E5%B7%A5%E5%8E%82%E5%87%BD%E6%95%B0/  

