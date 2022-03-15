import sys
from PySide6.QtWidgets import QApplication, QWidget
from square_button import SquareButton

def run_window(Widget: QWidget, *args):
    # Initialize the app object
    app = QApplication(sys.argv)

    # Initialize and show the widget
    window = Widget(*args)
    window.show()

    # Execute the widget and leave
    sys.exit(app.exec())

if __name__ == "__main__":
    run_window(SquareButton, "MyButton", "Open a button")

