import pathlib
import anywidget
import traitlets

class IpyReactFlow(anywidget.AnyWidget):
    _esm = pathlib.Path(__file__).parent / "static/widget.js"
    _css=  pathlib.Path(__file__).parent / "static/style.css"
