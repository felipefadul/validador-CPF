function validarCPF(cpf) {
  cpf = cpf.split('.').join("");
  cpf = cpf.split('-').join("");

  if (cpf.length != 11)
    return false;

  var numeros = cpf.substring(0, 9);
  var digitosVerificadores = cpf.substring(9);

  var soma = 0;
  for (var indice = 10;  indice > 1; indice--)
    soma += numeros.charAt(10 - indice) * indice;

  var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

  //Validação do primeiro dígito verificador.
  if (resultado != digitosVerificadores.charAt(0))
    return false;

  soma = 0;
  numeros = cpf.substring(0, 10);

  for (indice = 11; indice > 1; indice--)
    soma += numeros.charAt(11 - indice) * indice;

  resultado = (soma % 11) < 2 ? 0: 11 - (soma % 11);

  //Validação do segundo  dígito verificador.
  if (resultado != digitosVerificadores.charAt(1))
    return false;

  return true;
}

function validacao() {
  document.getElementById('success').style.display = 'none';
  document.getElementById('error').style.display = 'none';

  var cpf = document.getElementById('cpf_digitado').value;
  
  var resultadoValidacao = validarCPF(cpf);

  if (resultadoValidacao)
    document.getElementById('success').style.display = 'block';
  else
    document.getElementById('error').style.display = 'block';
}