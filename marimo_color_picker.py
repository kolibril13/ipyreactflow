import marimo

__generated_with = "0.8.17"
app = marimo.App(width="medium")


@app.cell
def __():
    from ipyreactflow import IntersectionWidget
    import marimo as mo
    w =mo.ui.anywidget(IntersectionWidget())
    w
    return IntersectionWidget, mo, w


@app.cell
def __(w):
    w.highlighted_nodes
    return


if __name__ == "__main__":
    app.run()
