import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const show_alert = (msn, icono, foco = '') => {
  onFocus(foco);
  const MySwal = withReactContent(Swal);
  MySwal.fire({
    icon: icono,
    text: msn,
  })
}
const onFocus = (foco) => {
  if (foco != '') {
    document.getElementById(foco).focus();
  }
}
