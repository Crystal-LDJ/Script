function magnifier() {



	var main_pict = document.getElementById("main_pict");

	var tobig = document.getElementById("tobig");

	var To_big = document.getElementById("To_big");

	var image_div = document.getElementById("image_div");



	var x, y, z = false;

	// ��ʾС�����չʾͼ

	main_pict.onmouseover = show;



	document.onmouseover = yiru; // document,����ڴ�������λ�õ����ͼƬ�������

	// �����main_pict�ڲ�������

	main_pict.onmousemove = yidong;

	main_pict.onmouseout = yichu;

	// ��ϸչʾͼ����С��ͷŴ�ͼչʾ

	function show() {

		tobig.style.display = "block";

		image_div.style.display = "block";

	}

	// ������뷽��

	function yiru(event) {



		// ���Լ���,�������ʶevent�в��.

		var event = event || window.event;

		z = true;// ��z=true��n��ֵ������趨��ʱ���ٶ�Ϊ���������¼�

		// offsetLeft:��ȡ��������ڰ������ offsetParent ����ָ���ĸ�����ļ������λ��

		// offsetTop:��ȡ��������ڰ������ offsetTop ����ָ���ĸ�����ļ��㶥��λ��

		x = event.clientX - tobig.offsetLeft;

		// �����͸�������Ժ�����=�������-С������߾�

		y = event.clientY - tobig.offsetTop;

		// �����͸��������������=�������-С�����ϱ߾�

	}



	function yidong(event) {

		var event = event || window.event;

		if (z == true) {

			// ��� ͸��С�����ƶ�λ��

			tobig.style.left = event.clientX - x + "px";

			tobig.style.top = event.clientY - y + "px";

			// ͼƬ�ƶ���λ�÷�Χ parseInt() �����ɽ���һ���ַ�����������һ��������

			image_div.style.left = -1.2 * parseInt(tobig.style.left) + "px";

			image_div.style.top = -1.2 * parseInt(tobig.style.top) + "px";

			// �޶�����ƶ���Χ

			if (parseInt(tobig.style.left) < 0) {

				tobig.style.left = 0 + "px";

			}



			if (parseInt(tobig.style.top) < 0) {

				tobig.style.top = 0 + "px";

			}

			// clientHeight �ɼ�����

			if (parseInt(tobig.style.left) > main_pict.clientWidth

					- tobig.clientWidth) {

				tobig.style.left = main_pict.clientLeft - tobig.clientLeft

						+ "px";

			}

			if (parseInt(tobig.style.top) > main_pict.clientHeight

					- tobig.clientHeight) {

				tobig.style.top = main_pict.clientHeight - tobig.clientHeight

						+ "px";

			}

			// �޶�ͼƬ�ƶ��ķ�Χ

			if (parseInt(image_div.style.left) > 0) {

				image_div.style.left = 0 + "px";

			}

			if (parseInt(image_div.style.top) > 0) {

				image_div.style.top = 0 + "px";

			}

			if (parseInt(image_div.style.left) < -1.2

					* (main_pict.clientWidth - tobig.clientWidth)) {

				image_div.style.left = -1.2

						* (main_pict.clientWidth - tobig.clientWidth) + "px";

			}

			if (parseInt(image_div.style.top) < -1.2

					* (main_pict.clientHeight - tobig.clientHeight)) {

				image_div.style.top = -1.2

						* (main_pict.clientHeight - tobig.clientHeight) + "px";

			}

		}

	}

	function yichu() {

		z = false;

		// �Ƴ���ʱ��С��ͷŴ󾵶���ʧ

		tobig.style.display = "none";

		image_div.style.display = "none";



	}

}