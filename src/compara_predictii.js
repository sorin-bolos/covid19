    
                    window.PLOTLYENV=window.PLOTLYENV || {};
                    
                    if (document.getElementById("compara-predictii")) {
                        Plotly.newPlot(
                            'compara-predictii',
                           [{"mode": "lines+markers", "name": "Predictie realista", "type": "scatter", "x": ["2020-02-26T00:00:00", "2020-02-27T00:00:00", "2020-02-28T00:00:00", "2020-02-29T00:00:00", "2020-03-01T00:00:00", "2020-03-02T00:00:00", "2020-03-03T00:00:00", "2020-03-04T00:00:00", "2020-03-05T00:00:00", "2020-03-06T00:00:00", "2020-03-07T00:00:00", "2020-03-08T00:00:00", "2020-03-09T00:00:00", "2020-03-10T00:00:00", "2020-03-11T00:00:00", "2020-03-12T00:00:00", "2020-03-13T00:00:00", "2020-03-14T00:00:00", "2020-03-15T00:00:00", "2020-03-16T00:00:00", "2020-03-17T00:00:00", "2020-03-18T00:00:00", "2020-03-19T00:00:00", "2020-03-20T00:00:00", "2020-03-21T00:00:00", "2020-03-22T00:00:00", "2020-03-23T00:00:00", "2020-03-24T00:00:00", "2020-03-25T00:00:00", "2020-03-26T00:00:00", "2020-03-27T00:00:00", "2020-03-28T00:00:00", "2020-03-29T00:00:00", "2020-03-30T00:00:00", "2020-03-31T00:00:00", "2020-04-01T00:00:00", "2020-04-02T00:00:00", "2020-04-03T00:00:00", "2020-04-04T00:00:00", "2020-04-05T00:00:00", "2020-04-06T00:00:00", "2020-04-07T00:00:00", "2020-04-08T00:00:00", "2020-04-09T00:00:00", "2020-04-10T00:00:00", "2020-04-11T00:00:00", "2020-04-12T00:00:00", "2020-04-13T00:00:00", "2020-04-14T00:00:00", "2020-04-15T00:00:00", "2020-04-16T00:00:00", "2020-04-17T00:00:00", "2020-04-18T00:00:00", "2020-04-19T00:00:00", "2020-04-20T00:00:00", "2020-04-21T00:00:00"], "y": [-39.4321819183861, -37.62915456355416, -35.49801693108189, -32.979266027133846, -30.002689654546522, -26.485471445883903, -22.32997349690497, -17.421146923783823, -11.623515137998462, -4.777669430454699, 3.3037878730934023, 12.840920069940026, 24.09181972994949, 37.358721803606876, 52.99491715526892, 71.41249610822572, 93.09091623793172, 118.58633405408489, 148.54155977788642, 183.69638023698866, 224.8978380059572, 273.1098460404837, 329.4212481018716, 395.0511019851704, 471.3495687344851, 559.7923546525589, 661.9662144266972, 779.5426556497162, 914.2368012941387, 1067.748527316194, 1241.6836974793769, 1437.454780444948, 1656.1625274147304, 1898.4637540407114, 2164.434406109381, 2453.4414426377934, 2764.0406989283465, 3093.919557924575, 3439.901717899448, 3798.025811634817, 4163.700274805302, 4531.925096823412, 4897.559435161701, 5255.605483377708, 5601.475832820261, 5931.214766781886, 6241.65255133582, 6530.483451739976, 6796.269957541116, 7038.385030804716, 7256.9096925863205, 7452.5047739323045, 7626.273971413943, 7779.6317080361205, 7914.184944768581, 8031.633956558644]}, {"mode": "lines+markers", "name": "Predictie pesimista", "type": "scatter", "x": ["2020-02-26T00:00:00", "2020-02-27T00:00:00", "2020-02-28T00:00:00", "2020-02-29T00:00:00", "2020-03-01T00:00:00", "2020-03-02T00:00:00", "2020-03-03T00:00:00", "2020-03-04T00:00:00", "2020-03-05T00:00:00", "2020-03-06T00:00:00", "2020-03-07T00:00:00", "2020-03-08T00:00:00", "2020-03-09T00:00:00", "2020-03-10T00:00:00", "2020-03-11T00:00:00", "2020-03-12T00:00:00", "2020-03-13T00:00:00", "2020-03-14T00:00:00", "2020-03-15T00:00:00", "2020-03-16T00:00:00", "2020-03-17T00:00:00", "2020-03-18T00:00:00", "2020-03-19T00:00:00", "2020-03-20T00:00:00", "2020-03-21T00:00:00", "2020-03-22T00:00:00", "2020-03-23T00:00:00", "2020-03-24T00:00:00", "2020-03-25T00:00:00", "2020-03-26T00:00:00", "2020-03-27T00:00:00", "2020-03-28T00:00:00", "2020-03-29T00:00:00", "2020-03-30T00:00:00", "2020-03-31T00:00:00", "2020-04-01T00:00:00", "2020-04-02T00:00:00", "2020-04-03T00:00:00", "2020-04-04T00:00:00", "2020-04-05T00:00:00", "2020-04-06T00:00:00", "2020-04-07T00:00:00", "2020-04-08T00:00:00", "2020-04-09T00:00:00", "2020-04-10T00:00:00", "2020-04-11T00:00:00", "2020-04-12T00:00:00", "2020-04-13T00:00:00", "2020-04-14T00:00:00", "2020-04-15T00:00:00", "2020-04-16T00:00:00", "2020-04-17T00:00:00", "2020-04-18T00:00:00", "2020-04-19T00:00:00", "2020-04-20T00:00:00", "2020-04-21T00:00:00"], "y": [-243.74217222582962, -231.0408152364654, -217.2244593288641, -202.19522341923997, -185.84663385353068, -168.06287010165124, -148.7179442344063, -127.67480837011811, -104.78438376773329, -79.8845046880815, -52.79876954113752, -23.33529118031595, 8.714662509663299, 43.57814736200572, 81.50215149027161, 122.75534505976339, 167.62998366401195, 216.44397879071056, 269.54315004517804, 327.30367508708656, 390.134754636869, 458.48151143187255, 532.8281436697325, 613.7013552793242, 701.6740873208316, 797.3695769497979, 901.4657727006224, 1014.7001373693001, 1137.8748725211124, 1271.8626016359644, 1417.6125521532376, 1576.1572802124651, 1748.619985730814, 1936.222469640575, 2140.2937896591966, 2362.279675913104, 2603.752773119687, 2866.423781887542, 3152.1535780647764, 3462.966395994135, 3801.0641690708553, 4168.842129198029, 4568.905775652781, 5004.089333578137, 5477.475832868547, 5992.41894969666, 6552.566765416216, 7161.887611159509, 7824.698181223748, 8545.694114413873, 9329.98325999331, 10183.121863913175, 11111.153931678946, 12120.654046718293, 13218.773947594043, 14413.293194035483]}, {"name": "Real", "type": "bar", "x": ["2020-02-26T00:00:00", "2020-02-27T00:00:00", "2020-02-28T00:00:00", "2020-02-29T00:00:00", "2020-03-01T00:00:00", "2020-03-02T00:00:00", "2020-03-03T00:00:00", "2020-03-04T00:00:00", "2020-03-05T00:00:00", "2020-03-06T00:00:00", "2020-03-07T00:00:00", "2020-03-08T00:00:00", "2020-03-09T00:00:00", "2020-03-10T00:00:00", "2020-03-11T00:00:00", "2020-03-12T00:00:00", "2020-03-13T00:00:00", "2020-03-14T00:00:00", "2020-03-15T00:00:00", "2020-03-16T00:00:00", "2020-03-17T00:00:00", "2020-03-18T00:00:00", "2020-03-19T00:00:00", "2020-03-20T00:00:00", "2020-03-21T00:00:00", "2020-03-22T00:00:00", "2020-03-23T00:00:00", "2020-03-24T00:00:00", "2020-03-25T00:00:00", "2020-03-26T00:00:00", "2020-03-27T00:00:00", "2020-03-28T00:00:00", "2020-03-29T00:00:00", "2020-03-30T00:00:00", "2020-03-31T00:00:00", "2020-04-01T00:00:00", "2020-04-02T00:00:00", "2020-04-03T00:00:00", "2020-04-04T00:00:00", "2020-04-05T00:00:00", "2020-04-06T00:00:00", "2020-04-07T00:00:00", "2020-04-08T00:00:00", "2020-04-09T00:00:00", "2020-04-10T00:00:00", "2020-04-11T00:00:00", "2020-04-12T00:00:00", "2020-04-13T00:00:00", "2020-04-14T00:00:00", "2020-04-15T00:00:00", "2020-04-16T00:00:00", "2020-04-17T00:00:00", "2020-04-18T00:00:00", "2020-04-19T00:00:00", "2020-04-20T00:00:00", "2020-04-21T00:00:00"], "y": [1.0, 1.0, 3.0, 3.0, 3.0, 3.0, 4.0, 6.0, 7.0, 9.0, 13.0, 15.0, 17.0, 29.0, 47.0, 59.0, 95.0, 123.0, 139.0, 168.0, 217.0, 260.0, 277.0, 308.0, 367.0, 433.0, 576.0, 762.0, 906.0, 1029.0, 1292.0, 1452.0, 1760.0, 1952.0, 2245.0, 2460.0, 2738.0, 3183.0, 3613.0, 3864.0, 4057.0, 4417.0, 4761.0, 5202.0, 5467.0, 5990.0, 6300.0, 6633.0, 6879.0, 7216.0, 7707.0, 8067.0, 8418.0, 8746.0, 8936.0, 9242.0]}],
                        {"template": {"data": {"bar": [{"error_x": {"color": "#2a3f5f"}, "error_y": {"color": "#2a3f5f"}, "marker": {"line": {"color": "#E5ECF6", "width": 0.5}}, "type": "bar"}], "barpolar": [{"marker": {"line": {"color": "#E5ECF6", "width": 0.5}}, "type": "barpolar"}], "carpet": [{"aaxis": {"endlinecolor": "#2a3f5f", "gridcolor": "white", "linecolor": "white", "minorgridcolor": "white", "startlinecolor": "#2a3f5f"}, "baxis": {"endlinecolor": "#2a3f5f", "gridcolor": "white", "linecolor": "white", "minorgridcolor": "white", "startlinecolor": "#2a3f5f"}, "type": "carpet"}], "choropleth": [{"colorbar": {"outlinewidth": 0, "ticks": ""}, "type": "choropleth"}], "contour": [{"colorbar": {"outlinewidth": 0, "ticks": ""}, "colorscale": [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], "type": "contour"}], "contourcarpet": [{"colorbar": {"outlinewidth": 0, "ticks": ""}, "type": "contourcarpet"}], "heatmap": [{"colorbar": {"outlinewidth": 0, "ticks": ""}, "colorscale": [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], "type": "heatmap"}], "heatmapgl": [{"colorbar": {"outlinewidth": 0, "ticks": ""}, "colorscale": [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], "type": "heatmapgl"}], "histogram": [{"marker": {"colorbar": {"outlinewidth": 0, "ticks": ""}}, "type": "histogram"}], "histogram2d": [{"colorbar": {"outlinewidth": 0, "ticks": ""}, "colorscale": [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], "type": "histogram2d"}], "histogram2dcontour": [{"colorbar": {"outlinewidth": 0, "ticks": ""}, "colorscale": [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], "type": "histogram2dcontour"}], "mesh3d": [{"colorbar": {"outlinewidth": 0, "ticks": ""}, "type": "mesh3d"}], "parcoords": [{"line": {"colorbar": {"outlinewidth": 0, "ticks": ""}}, "type": "parcoords"}], "pie": [{"automargin": true, "type": "pie"}], "scatter": [{"marker": {"colorbar": {"outlinewidth": 0, "ticks": ""}}, "type": "scatter"}], "scatter3d": [{"line": {"colorbar": {"outlinewidth": 0, "ticks": ""}}, "marker": {"colorbar": {"outlinewidth": 0, "ticks": ""}}, "type": "scatter3d"}], "scattercarpet": [{"marker": {"colorbar": {"outlinewidth": 0, "ticks": ""}}, "type": "scattercarpet"}], "scattergeo": [{"marker": {"colorbar": {"outlinewidth": 0, "ticks": ""}}, "type": "scattergeo"}], "scattergl": [{"marker": {"colorbar": {"outlinewidth": 0, "ticks": ""}}, "type": "scattergl"}], "scattermapbox": [{"marker": {"colorbar": {"outlinewidth": 0, "ticks": ""}}, "type": "scattermapbox"}], "scatterpolar": [{"marker": {"colorbar": {"outlinewidth": 0, "ticks": ""}}, "type": "scatterpolar"}], "scatterpolargl": [{"marker": {"colorbar": {"outlinewidth": 0, "ticks": ""}}, "type": "scatterpolargl"}], "scatterternary": [{"marker": {"colorbar": {"outlinewidth": 0, "ticks": ""}}, "type": "scatterternary"}], "surface": [{"colorbar": {"outlinewidth": 0, "ticks": ""}, "colorscale": [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], "type": "surface"}], "table": [{"cells": {"fill": {"color": "#EBF0F8"}, "line": {"color": "white"}}, "header": {"fill": {"color": "#C8D4E3"}, "line": {"color": "white"}}, "type": "table"}]}, "layout": {"annotationdefaults": {"arrowcolor": "#2a3f5f", "arrowhead": 0, "arrowwidth": 1}, "coloraxis": {"colorbar": {"outlinewidth": 0, "ticks": ""}}, "colorscale": {"diverging": [[0, "#8e0152"], [0.1, "#c51b7d"], [0.2, "#de77ae"], [0.3, "#f1b6da"], [0.4, "#fde0ef"], [0.5, "#f7f7f7"], [0.6, "#e6f5d0"], [0.7, "#b8e186"], [0.8, "#7fbc41"], [0.9, "#4d9221"], [1, "#276419"]], "sequential": [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]], "sequentialminus": [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]]}, "colorway": ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#FFA15A", "#19d3f3", "#FF6692", "#B6E880", "#FF97FF", "#FECB52"], "font": {"color": "#2a3f5f"}, "geo": {"bgcolor": "white", "lakecolor": "white", "landcolor": "#E5ECF6", "showlakes": true, "showland": true, "subunitcolor": "white"}, "hoverlabel": {"align": "left"}, "hovermode": "closest", "mapbox": {"style": "light"}, "paper_bgcolor": "white", "plot_bgcolor": "#E5ECF6", "polar": {"angularaxis": {"gridcolor": "white", "linecolor": "white", "ticks": ""}, "bgcolor": "#E5ECF6", "radialaxis": {"gridcolor": "white", "linecolor": "white", "ticks": ""}}, "scene": {"xaxis": {"backgroundcolor": "#E5ECF6", "gridcolor": "white", "gridwidth": 2, "linecolor": "white", "showbackground": true, "ticks": "", "zerolinecolor": "white"}, "yaxis": {"backgroundcolor": "#E5ECF6", "gridcolor": "white", "gridwidth": 2, "linecolor": "white", "showbackground": true, "ticks": "", "zerolinecolor": "white"}, "zaxis": {"backgroundcolor": "#E5ECF6", "gridcolor": "white", "gridwidth": 2, "linecolor": "white", "showbackground": true, "ticks": "", "zerolinecolor": "white"}}, "shapedefaults": {"line": {"color": "#2a3f5f"}}, "ternary": {"aaxis": {"gridcolor": "white", "linecolor": "white", "ticks": ""}, "baxis": {"gridcolor": "white", "linecolor": "white", "ticks": ""}, "bgcolor": "#E5ECF6", "caxis": {"gridcolor": "white", "linecolor": "white", "ticks": ""}}, "title": {"x": 0.05}, "xaxis": {"automargin": true, "gridcolor": "white", "linecolor": "white", "ticks": "", "title": {"standoff": 15}, "zerolinecolor": "white", "zerolinewidth": 2}, "yaxis": {"automargin": true, "gridcolor": "white", "linecolor": "white", "ticks": "", "title": {"standoff": 15}, "zerolinecolor": "white", "zerolinewidth": 2}}}, "title": {"text": "Predictii din urma cu o saptamana (14 Aprilie) vs real"}},
                        {"responsive": true}
                    )
                };
                 
