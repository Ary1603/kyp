import Swal from "sweetalert2";

export default function sweetAlerts(alert_name, title , message) {
  switch (alert_name) {
    case 'success':
        Swal.fire({
            icon: "success",
            title: title,
            text: message,
          })
      break;

    case 'warning':
        Swal.fire({
            icon: "error",
            title: title,
            text: message,
          });
      break;

    default:
      break;
  }
}
