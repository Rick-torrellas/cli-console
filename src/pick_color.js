import chalk from "chalk";
function command_start__Pick_Color({
  colorVerbose,
  colorName,
  colorArg,
  colorDescription,
  bgName,
  bgArg,
  bgDescription,
  bgVerbose,
  name,
  arg,
  description,
}) {
  let _name, _arg, _description, _verbose;
  _arg = chalk.bgHex(bgArg).hex(colorArg)(arg);
  _verbose = chalk.bgHex(bgVerbose).hex(colorVerbose)("verbose activated");
  bgName !== ""
    ? (_name = chalk.bgHex(bgName).hex(colorName)(name))
    : (_name = chalk.hex(colorName)(name));
  bgDescription !== ""
    ? (_description = chalk.bgHex(bgDescription).hex(colorDescription)(
        description
      ))
    : (_description = chalk.hex(colorDescription)(description));
  return {
    _arg,
    _name,
    _description,
    _verbose,
  };
}
function command_done__Pick_Color({
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
}) {
  let _name, _message, _check_mark, _x_mark;
  _name = chalk.bgHex(bgName).hex(colorName)(name);
  bgMessage !== ""
    ? (_message = chalk.bgHex(bgMessage).hex(colorMessage)(message))
    : (_message = chalk.hex(colorMessage)(message));
  bgCheck_mark !== ""
    ? (_check_mark = chalk.bgHex(bgCheck_mark).hex(colorCheck_mark)(check_mark))
    : (_check_mark = chalk.hex(colorCheck_mark)(check_mark));
  bgX_mark !== ""
    ? (_x_mark = chalk.bgHex(bgX_mark).hex(colorX_mark)(x_mark))
    : (_x_mark = chalk.hex(colorX_mark)(x_mark));
  return {
    _name,
    _message,
    _check_mark,
    _x_mark,
  };
}
function process_start__Pick_Color({
  colorName,
  colorDescription,
  colorTitle,
  bgName,
  bgDescription,
  bgTitle,
  name,
  description,
  titleTxt,
}) {
  let _name, _description, _title;
  _title = chalk.bgHex(bgTitle).hex(colorTitle)(titleTxt);
  bgName !== ""
    ? (_name = chalk.bgHex(bgName).hex(colorName)(name))
    : (_name = chalk.hex(colorName)(name));
  bgDescription !== ""
    ? (_description = chalk.bgHex(bgDescription).hex(colorDescription)(
        description
      ))
    : (_description = chalk.hex(colorDescription)(description));
  return {
    _name,
    _description,
    _title,
  };
}
function process_done__Pick_Color({
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
}) {
  let _name, _message, _check_mark, _x_mark;
  bgMessage !== ""
    ? (_message = chalk.bgHex(bgMessage).hex(colorMessage)(message))
    : (_message = chalk.hex(colorMessage)(message));
  bgName !== ""
    ? (_name = chalk.bgHex(bgName).hex(colorName)(name))
    : (_name = chalk.hex(colorName)(name));
  bgCheck_mark !== ""
    ? (_check_mark = chalk.bgHex(bgCheck_mark).hex(colorCheck_mark)(check_mark))
    : (_check_mark = chalk.hex(colorCheck_mark)(check_mark));
  bgX_mark !== ""
    ? (_x_mark = chalk.bgHex(bgX_mark).hex(colorX_mark)(x_mark))
    : (_x_mark = chalk.hex(colorX_mark)(x_mark));
  return { _name, _message, _check_mark, _x_mark };
}
function info_Pick_Color({
  colorName,
  colorMessage,
  colorInfo,
  bgName,
  bgMessage,
  bgInfo,
  name,
  message,
  infoTxt,
}) {
  let _name, _message, _info;
  bgMessage !== ""
    ? (_message = chalk.bgHex(bgMessage).hex(colorMessage)(message))
    : (_message = chalk.hex(colorMessage)(message));
  bgName !== ""
    ? (_name = chalk.bgHex(bgName).hex(colorName)(name))
    : (_name = chalk.hex(colorName)(name));
  bgInfo !== ""
    ? (_info = chalk.bgHex(bgInfo).hex(colorInfo)(infoTxt))
    : (_info = chalk.hex(colorInfo)(infoTxt));
  return {
    _name,
    _message,
    _info,
  };
}
function data_Pick_Color({
  colorName,
  colorMessage,
  colorInfo,
  bgName,
  bgMessage,
  bgInfo,
  name,
  message,
  infoTxt,
}) {
  let _name, _message, _info;
  bgMessage !== ""
    ? (_message = chalk.bgHex(bgMessage).hex(colorMessage)(message))
    : (_message = chalk.hex(colorMessage)(message));
  bgName !== ""
    ? (_name = chalk.bgHex(bgName).hex(colorName)(name))
    : (_name = chalk.hex(colorName)(name));
  bgInfo !== ""
    ? (_info = chalk.bgHex(bgInfo).hex(colorInfo)(infoTxt))
    : (_info = chalk.hex(colorInfo)(infoTxt));
  return {
    _name,
    _message,
    _info,
  };
}
function error_Pick_Color({
  colorError,
  colorTitle,
  bgError,
  bgTitle,
  titleText,
  error,
}) {
  let _title, _error;
  if (error.stack !== undefined) {
    bgError !== ""
      ? (_error = chalk.bgHex(bgError).hex(colorError)(error.stack))
      : (_error = chalk.hex(colorError)(error.stack));
  } else {
    bgError !== ""
      ? (_error = chalk.bgHex(bgError).hex(colorError)(error))
      : (_error = chalk.hex(colorError)(error));
  }
  bgTitle !== ""
    ? (_title = chalk.bgHex(bgTitle).hex(colorTitle)(titleText))
    : (_title = chalk.hex(colorTitle)(titleText));
  return { _title, _error };
}
function warning_Pick_Color({
  colorName,
  colorMessage,
  colorTitle,
  bgName,
  bgMessage,
  bgTitle,
  titleTxt,
  name,
  message,
}) {
  let _name, _message, _title;
  bgName !== ""
    ? (_name = chalk.bgHex(bgName).hex(colorName)(name))
    : (_name = chalk.hex(colorName)(name));
  bgMessage !== ""
    ? (_message = chalk.bgHex(bgMessage).hex(colorMessage)(message))
    : (_message = chalk.hex(colorMessage)(message));
  bgTitle !== ""
    ? (_title = chalk.bgHex(bgTitle).hex(colorTitle)(titleTxt))
    : (_title = chalk.hex(colorTitle)(titleTxt));
  return { _name, _message, _title };
}
function values_Pick_Color({ colorTitle, bgTitle, titleTxt }) {
  let _title;
  bgTitle !== ""
    ? (_title = chalk.bgHex(bgTitle).hex(colorTitle)(titleTxt))
    : (_title = chalk.hex(colorTitle)(titleTxt));
  return {
    _title,
  };
}
function args_Pick_Color({ colorTitle, bgTitle, titleTxt }) {
  let _title;
  bgTitle !== ""
    ? (_title = chalk.bgHex(bgTitle).hex(colorTitle)(titleTxt))
    : (_title = chalk.hex(colorTitle)(titleTxt));
  return {
    _title,
  };
}
export default {
  command_start__Pick_Color,
  command_done__Pick_Color,
  process_done__Pick_Color,
  process_start__Pick_Color,
  info_Pick_Color,
  data_Pick_Color,
  error_Pick_Color,
  warning_Pick_Color,
  values_Pick_Color,
  args_Pick_Color,
};
