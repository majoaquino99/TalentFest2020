const mockData = [
	{
		taskList: [{
			taskId: '1',
			taskName: 'Enviarle el contrato y este es demo',
			description: 'Enviarle el contrato de presupuesto', 
			priority: '2',
			status: '4',
		}, 
		{   taskId: '4',            
			taskName: 'Se deriva de las fases',
			description: 'Aquí están las tareas de cada fase', 
			priority: '2',
			status: '4',
		},
		{   taskId: '5',
			taskName: 'Sigue siendo parte de las fases',
			description: 'Esta sera la segunda linea de la gráfica', 
			priority:'2',
			status: '5',
		},
		{   taskId: '6',
			taskName: 'Convertir cotización a factura',
			description: '', 
			priority: '3',
			status: '4',
		},            
		{   taskId: '7',
			taskName: 'Se creó nuevo contacto 01',
			description: 'Contacto 01 seguimiento', 
			priority: '2',
			status: '4',
		},
		{   taskId: '8',
			taskName: 'Tarea de capacitación',
			description: '', 
			priority: '1',
			status: '4',
		},
		{   taskId: '9',
			taskName: 'Prueba de nueva tarea',
			description: '', 
			priority: '2',
			status: '5',
		},
		{   taskId: '10',
			taskName: 'REQS',
			description: '', 
			priority: '2',
			status: '4',
		},
		{   taskId: '11',
			taskName: 'Volcán Tarea 1',
			description: '', 
			priority: '2',
			status: '5',
		},
		]
	},
	{
		projectList: [{
			projectId: '6',
			projectName: 'Volcán Ajusco',
			userid: '4',
		}, {
			projectId: '4',
			projectName: 'Rancho Carne',
			userid:'4'
		},{
			projectId: '3',
			projectName: 'proyecto dentro de monitores',
			userid:'4'
		},]
	},
	{
		staffData: {
			staffid: '4',
			firstname: "Sinai",
			full_name: "Sinai Pruebas",
			staffemail: "sinai@4040apps.com.mx"
		}
	}
]

export default mockData;