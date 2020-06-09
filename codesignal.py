def chessBoardCellColor(cell1, cell2):
    # if a, c, e, g:
    # if even #: light
    # else: dark
    # if b, d, f, h:
    # if even #: dark
    # else: light

    alpha_light = ["A", "C", "E", "G"]
    alpha_dark = ["B", "D", "F", "H"]
    color1 = ""
    color2 = ""

    cell1 = list(cell1)
    cell2 = list(cell2)
    print("cell1: ", cell1)
    print("cell2: ", cell2)
    if cell1[0] in alpha_light:
        if int(cell1[1]) % 2 == 0:
            color1 = "light"
        else:
            color1 = "dark"
    if cell1[0] in alpha_dark:
        if int(cell1[1]) % 2 == 0:
            color1 = "dark"
        else:
            color1 = "light"

    if cell2[0] in alpha_light:
        if int(cell2[1]) % 2 == 0:
            color2 = "light"
        else:
            color2 = "dark"
    if cell2[0] in alpha_dark:
        if int(cell2[1]) % 2 == 0:
            color2 = "dark"
        else:
            color2 = "light"

    print(color1 == color2)
    return color1 == color2


chessBoardCellColor('A1', 'B2')
