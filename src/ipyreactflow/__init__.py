import importlib.metadata
import pathlib

import anywidget
import traitlets

try:
    __version__ = importlib.metadata.version("ipyreactflow")
except importlib.metadata.PackageNotFoundError:
    __version__ = "unknown"


class ReactFlowWidget(anywidget.AnyWidget):
    _esm = pathlib.Path(__file__).parent / "static" / "widget.js"
    _css = pathlib.Path(__file__).parent / "static" / "widget.css"
    value = traitlets.Int(0).tag(sync=True)

class IntersectionWidget(anywidget.AnyWidget):
    _esm = pathlib.Path(__file__).parent / "static" / "intersecting_nodes.js"
    _css = pathlib.Path(__file__).parent / "static" / "intersecting_nodes.css"
    value = traitlets.Int(0).tag(sync=True)