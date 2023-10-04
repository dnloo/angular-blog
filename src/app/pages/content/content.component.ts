import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://www.adrenaline.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?width=1200&height=545&format=webp&quality=91&imagick=/wp-content/uploads/2023/03/NVIDIA_usar_plantas_Intel_produzir_GPUs_futuro.jpg"
  contentTitle:string = ""
  contentDescription:string= "qqqqqqqq"
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = (value.get("id"))
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
    }
  }


