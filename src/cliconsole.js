/**
 * Modulo para depurar el codigo, con una serie de logs, muestra mensajes para ayudar a visualizar donde esta el error.
 * @module cliconsole
 */
import pick_color from "./pick_color.js";
const { log, group, groupEnd } = console;

/**
 * Indicates the start of a command, displays information for that command. To end the use {@link command_done} command
 *
 * The color values are in hexadecimal.
 * @returns {void}
 * @example ```
 * command_start("init", "-d,-a",{verbose:true,description: "Alguna descripcion",colorName: "#543F1C",bgName: "#999733"});
 * ```
 */
function command_start(
  { name = "", arg = "", description = "", verbose = false } = {},
  opts = {}
) {
  if (verbose) {
    //TODO: habilitar la opcion de colocar el texto que quieras en el, verbose activated.
    let {
      colorVerbose = "#000000",
      colorName = "#FEFBFB",
      colorArg = "#FEFBFB",
      colorDescription = "#FEFBFB",
      bgName = "",
      bgArg = "#260D0D",
      bgDescription = "",
      bgVerbose = "#FEFBFB",
    } = opts;
    let { _name, _arg, _description, _verbose } =
      pick_color.command_start__Pick_Color({
        colorArg,
        colorName,
        colorDescription,
        colorVerbose,
        bgArg,
        bgName,
        bgDescription,
        bgVerbose,
        name,
        arg,
        description,
      });
    group();
    if (_name === "" && _arg === "" && _description === "") {
      return;
    }
    log(`${_name} ${_arg}
  `);
    log(_verbose);
    description !== "" && log(_description);
    return;
  }
}
/**
 *
 */
function command_done(
  { name = "", message = "", status = "", verbose = false } = {},
  opts = {}
) {
  if (verbose) {
    //TODO: se puede eliminar los espacios en blanco, que sean mayores de 1 espacio, con regegular exprecion y la funcion replace.
    let {
      colorName = "#FBFEFC",
      colorMessage = "#FBFEFC",
      colorCheck_mark = "#54B03B",
      colorX_mark = "#BB3E3E",
      bgName = "#3D1414",
      bgMessage = "",
      bgCheck_mark = "",
      bgX_mark = "",
    } = opts;
    const check_mark = "✔";
    const x_mark = "❌";
    let say;
    const { _name, _message, _check_mark, _x_mark } =
      pick_color.command_done__Pick_Color({
        colorName,
        colorMessage,
        colorCheck_mark,
        colorX_mark,
        bgName,
        bgMessage,
        bgCheck_mark,
        bgX_mark,
        name,
        message,
        x_mark,
        check_mark,
      });
    if (status) {
      say = `${_check_mark} ${_name}: ${_message}`;
    } else if (status == "") {
      say = `${_name}: ${_message}`;
    } else {
      say = `${_x_mark} ${_name}: ${_message}`;
    }
    if (name === "" && message === "" && status === "") {
      return;
    }
    log(say);
    groupEnd();
    return;
  }
}
/**
 * Inidica el inicio de un proceso.
 *
 * Para indicar el cierre del proceso usar {@link process_done}
 * @param {string} name El nombre de la funcion.
 * @param {string} type La clasificacion de funcion que uno le quiera dar.
 * @returns {void}
 */
function process_start(
  { name = "", description = "", verbose = false } = {},
  opts = {}
) {
  if (verbose) {
    let {
      colorName = "",
      colorDescription = "",
      colorTitle = "#FCFAF7",
      bgName = "",
      bgDescription = "",
      bgTitle = "#85BBD6",
      titleTxt = "Process Name:",
    } = opts;
    let { _name, _description, _title } = pick_color.process_start__Pick_Color({
      colorName,
      colorDescription,
      colorTitle,
      bgName,
      bgDescription,
      bgTitle,
      name,
      description,
      titleTxt,
    });
    // PROCESS
    if (_name === "" && _description === "") {
      return;
    }
    _name !== "" && log(`${_title} ${name}`);
    _description !== "" && log(`${description}`);
    return;
  }
}

/**
 * Indica la finalisacion de un proceso o una funcion.
 * @param {*} title El titulo de la funcion.
 * @param {*} mensaje El mensaje final.
 * @returns
 */
function process_done(
  { name = "", message = "", status = false, verbose = false } = {},
  opts = {}
) {
  if (verbose) {
    let {
      colorName = "#5377C6",
      colorMessage = "#F9FAF0",
      colorCheck_mark = "#297A2D",
      colorX_mark = "#993833",
      bgName = "",
      bgMessage = "",
      bgCheck_mark = "",
      bgX_mark = "",
    } = opts;
    const check_mark = "✔";
    const x_mark = "❌";
    let { _name, _message, _check_mark, _x_mark } =
      pick_color.process_done__Pick_Color({
        colorName,
        colorMessage,
        colorCheck_mark,
        colorX_mark,
        bgName,
        bgMessage,
        bgCheck_mark,
        bgX_mark,
        name,
        message,
        x_mark,
        check_mark,
      });
    if (_name == "" && _message == "" && status == "") {
      return;
    }
    if (status) {
      log(`${_check_mark} ${_name}: ${_message}`);
      return;
    } else {
      log(`${_x_mark} ${_name}: ${_message}`);
      return;
    }
  }
}

/**
 * Para dar alguna informacion.
 *
 * **Nota**: no necesita tener el debug activado, si quieres usar una vercion con el debug activado usar {@link data}
 * @param {string} title El titulo de la informacion.
 * @param {string} description La descripcion de la informacion.
 * @returns {void}
 */
function info({ name = "", message = "" } = {}, opts = {}) {
  let {
    colorName = "#FEFBFB",
    colorMessage = "#FEFBFB",
    colorInfo = "#2E578A",
    bgName = "",
    bgMessage = "",
    bgInfo = "",
    infoTxt = "Info",
  } = opts;
  let { _name, _message, _info } = pick_color.info_Pick_Color({
    name,
    message,
    infoTxt,
    colorName,
    colorMessage,
    colorInfo,
    bgName,
    bgMessage,
    bgInfo,
  });
  if (name === "" && message === "") {
    return;
  }
  log(`${_info}: ${_name}`);
  _message !== "" && log(_message);
}

/**
 * Para dar alguna informacion.
 *
 * **Nota**: necesita tener el debug activado, si quieres usar una vercion que no necesite el debug activado usar {@link info}
 */
function data({ name = "", message = "", verbose = false } = {}, opts = {}) {
  if (verbose) {
    let {
      colorName = "#FEFBFB",
      colorMessage = "#FEFBFB",
      colorInfo = "#A16B36",
      bgName = "",
      bgMessage = "",
      bgInfo = "",
      infoTxt = "Info",
    } = opts;
    let { _name, _message, _info } = pick_color.data_Pick_Color({
      name,
      message,
      infoTxt,
      colorName,
      colorMessage,
      colorInfo,
      bgName,
      bgMessage,
      bgInfo,
    });
    if (name === "" && message === "") {
      return;
    }
    log(`${_info}: ${_name}`);
    _message !== "" && log(_message);
  }
}

/**
 * Para indicar que existe un error critico.
 *
 * Tambien puedes hacer una advertencia con {@link warning}
 * @param {string} title El titulo del error.
 * @param {*} error Una explicacion detallada del error.
 * @returns {void}
 */
function error({ error = "" } = {}, opts = {}) {
  //TODO: crear la posibilidad de crear un mensajo opcional, donde solo se use el name, message obviando el stack.
  let {
    colorError = "#FBF4F4",
    colorTitle = "FBF4F4",
    bgError = "",
    bgTitle = "#B43C3C",
    titleText = "ERROR",
  } = opts;
  let { _title, _error } = pick_color.error_Pick_Color({
    colorError,
    colorTitle,
    bgError,
    bgTitle,
    titleText,
    error,
  });
  if (error === "") {
    return;
  }
  if (
    error.name == undefined ||
    error.message == undefined ||
    error.stack == undefined
  ) {
    console.error(`${_title}: ${_error}`);
    return;
  } else {
    console.error(`${_title} - ${_error}`);
    return;
  }
}

/**
 * Indica una advertencia, sobre algo que puede causar un error, o que podria ser mas optimo.
 *
 * Para indicar un {@link error}
 * @param {*} title El titulo de la advertencia.
 * @param {*} description La descripcion de la advertencia.
 * @returns {void}
 */
function warning({ name = "", message = "", verbose = false } = {}, opts = {}) {
  if (verbose) {
    let {
      colorName = "#FBF4F4",
      colorMessage = "#FBF4F4",
      colorTitle = "#FBF4F4",
      bgName = "",
      bgMessage = "",
      bgTitle = "#B9C34B",
      titleTxt = "WARNING",
    } = opts;
    let { _name, _message, _title } = pick_color.warning_Pick_Color({
      colorName,
      colorMessage,
      colorTitle,
      bgName,
      bgMessage,
      bgTitle,
      titleTxt,
      name,
      message,
    });
    if (name === "" && message === "") {
      return;
    }
    log(`${_title}: ${_name}`);
    message !== "" && log(`${_message}`);
    return;
  }
}

/**
 * Muestra los valores que se usan en una funcion.
 * @param {*} values Valores de una funcion
 * @returns {void}
 */
function values({ values = "", verbose = false } = {}, opts = {}) {
  if (verbose) {
    let { colorTitle = "#266722", bgTitle = "", titleTxt = "Values" } = opts;
    let { _title } = pick_color.values_Pick_Color({
      colorTitle,
      bgTitle,
      titleTxt,
    });
    if (values === "") {
      return;
    }
    log(`${_title}:`);
    console.table(values);
    return;
  }
}
/**
 * Muestra los argumentos de una funcion.
 * @returns {void}
 */
function args({ args = "", verbose = false } = {}, opts = {}) {
  if (verbose) {
    let { colorTitle = "#C18A44", bgTitle = "", titleTxt = "Arguments" } = opts;
    let { _title } = pick_color.args_Pick_Color({
      colorTitle,
      bgTitle,
      titleTxt,
    });
    if (args === "") {
      return;
    }
    log(`${_title}:`);
    console.table(args);
    return;
  }
}
/**
 * @type {Object}
 */
let cliconsole = {};
cliconsole.start = command_start;
cliconsole.process_start = process_start;
cliconsole.command_done = command_done;
cliconsole.info = info;
cliconsole.data = data;
cliconsole.error = error;
cliconsole.warning = warning;
cliconsole.values = values;
cliconsole.process_done = process_done;
cliconsole.args = args;
export default cliconsole;
