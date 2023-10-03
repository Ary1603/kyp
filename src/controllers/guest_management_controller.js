import sweetAlerts from "../components/alerts/sweet_alerts/alerts";
const url_set_confirmation_api = 'https://kyp-webapp.fly.dev/api/set-confirmation'
const url_list_confitmation_api = 'https://kyp-webapp.fly.dev/api/list-confirmation'
export function apiSendConfitmation(id, name, surnames, email, rsvp, message, phone){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("event_name", id);
    urlencoded.append("name", name);
    urlencoded.append("surnames", surnames);
    urlencoded.append("email", email);
    urlencoded.append("rsvp", rsvp);
    urlencoded.append("message", message);
    urlencoded.append("phone", phone);

    if (
        name != null &&
        name != undefined &&
        name != "" &&
        surnames != null &&
        surnames != undefined &&
        surnames != "" &&
        phone != null &&
        phone != undefined &&
        phone != "" &&
        rsvp != null &&
        rsvp != undefined &&
        rsvp != ""
      ) {
        fetch(url_set_confirmation_api, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: urlencoded,
        }) //.then((response) => console.log(response))
          .then((response) => response.json())
          .then((data) => {
            data.status == 200
              ? sweetAlerts(
                "success",
                "Asistencia confirmada !",
                "Gracias por ser parte de esta gran historia"
              )
              : sweetAlerts(
                "warning",
                "Oops...",
                "Revisa los campos del formulario"
              );
          })
          .catch((error) => {
            sweetAlerts("warning", "Error", "No se pudo enviar el mensaje.");
            console.error("Error en la peticion: " + error);
          });
      } else {
        sweetAlerts("warning", "Oops...", "Revisa los campos del formulario");
      }

}

// export  const fetchApiGet = (url) => {
//   fetch(url, {
//     method: "GET",
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       //console.log(data.menuItems);
//       setCategories(data);
//       //console.log(data);
//     })
//     .catch((error) => console.error("Error en la peticion: " + error));
// };

function fieldValidation(id, name, surnames, email, rsvp, message, phone){
    if (
        name != null &&
        name != undefined &&
        name != "" &&
        surnames != null &&
        surnames != undefined &&
        surnames != "" &&
        phone != null &&
        phone != undefined &&
        phone != "" &&
        rsvp != null &&
        rsvp != undefined &&
        rsvp != ""
      ) {

      }
}

function fetchAPI(url, urlencoded, method){
    fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlencoded,
      }) //.then((response) => console.log(response))
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.status == 200
            ? sweetAlerts(
              "success",
              "Asistencia confirmada !",
              "Gracias por ser parte de esta gran historia"
            )
            : sweetAlerts(
              "warning",
              "Oops...",
              "Revisa los campos del formulario"
            );
        })
        .catch((error) => {
          sweetAlerts("warning", "Error", "No se pudo enviar el mensaje.");
          console.error("Error en la peticion: " + error);
        });
}