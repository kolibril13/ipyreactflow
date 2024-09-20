import marimo

__generated_with = "0.8.17"
app = marimo.App(width="medium")


@app.cell
def __():
    import marimo as mo

    import matplotlib.pyplot as plt
    import numpy as np
    plt.style.use('_mpl-gallery')

    np.random.seed(42)
    x = 4 + np.random.normal(0, 2, 24)
    y = 4 + np.random.normal(0, 2, len(x))
    sizes = np.random.uniform(15, 80, len(x))
    opacity = np.random.uniform(0, 1, len(x))
    return mo, np, opacity, plt, sizes, x, y


@app.cell
def __(mo):
    from ipyreactflow import ColorPicker
    widget =mo.ui.anywidget(ColorPicker())
    widget
    return ColorPicker, widget


@app.cell
def __(widget):
    widget.target_node
    return


@app.cell
def __(np, opacity, plt, sizes, widget, x, y):
    fig, ax = plt.subplots()
    ax.scatter(x, y, s=sizes*5, color=widget.target_node or None, alpha=opacity)

    fig.set_size_inches(3, 3)
    ax.set(xlim=(0, 8), xticks=np.arange(1, 8), ylim=(0, 8), yticks=np.arange(1, 8))
    plt.gca()
    return ax, fig


@app.cell
def __():
    return


if __name__ == "__main__":
    app.run()
